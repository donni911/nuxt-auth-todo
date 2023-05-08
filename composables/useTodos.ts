const useTodos = async () => {
  const { supabase } = useSupabase();
  const { user } = useAuth();

  const { data: notes, refresh } = await useAsyncData("notes", async () => {
    return await supabase.from("notes").select().eq("user_id", user.value.id);
  });

  const deleteNote = async (id) => {
    await supabase.from("notes").delete().eq("id", id);
    refresh();
  };

  const createNote = async (note) => {
    await supabase.from("notes").insert(note);
    refresh();
  };

  return { notes, deleteNote, createNote };
};

export default useTodos;
