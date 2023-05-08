import { createClient } from "@supabase/supabase-js";

// const config = await useEnv();
const useSupabase = () => {
  const config = useRuntimeConfig();

  const supabaseUrl = config.public.SUPABASE_URL;
  const supabaseKey = config.public.SUPABASE_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);

  return { supabase };
};

export default useSupabase;
