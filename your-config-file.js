// Previous Supabase connection
const supabaseUrl = 'https://your-project-id.supabase.co'
const supabaseKey = 'your-supabase-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// New direct PostgreSQL connection
const db = {
  host: '192.168.0.220',
  port: 5433,
  database: 'postgres',
  user: 'postgres',
  password: '1'
} 