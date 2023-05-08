import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mttrkexpkreplsprwmzd.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10dHJrZXhwa3JlcGxzcHJ3bXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMzA3OTksImV4cCI6MTk5ODYwNjc5OX0.i2iNDfmkgZw7E2-C9vv4l7o7mwxnIVeclOmRd2EVPt8";

const useSupabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  return { supabase };
};
export default useSupabase;
