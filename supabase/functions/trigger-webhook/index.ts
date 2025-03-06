
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the request body
    const { webhookId, payload } = await req.json()
    
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Get the webhook configuration
    const { data: webhook, error: webhookError } = await supabase
      .from('webhook_configs')
      .select('*')
      .eq('id', webhookId)
      .single()
    
    if (webhookError || !webhook) {
      return new Response(
        JSON.stringify({ error: 'Webhook configuration not found' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
      )
    }
    
    if (!webhook.is_active) {
      return new Response(
        JSON.stringify({ error: 'Webhook is not active' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }
    
    // Trigger the webhook
    const response = await fetch(webhook.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: webhook.event_type,
        data: payload,
        timestamp: new Date().toISOString(),
      }),
    })
    
    // Log the webhook response
    console.log(`Webhook ${webhookId} triggered with status: ${response.status}`)
    
    return new Response(
      JSON.stringify({ success: true, status: response.status }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error triggering webhook:', error)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
