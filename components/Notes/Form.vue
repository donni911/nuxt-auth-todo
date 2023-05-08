<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();
const emit = defineEmits(["create-notes"]);
console;

const notesInput = reactive({
    title: "",
    note: "",
});

const handleSubmit = async () => {
    if (!notesInput.title || !notesInput.note) {
        return;
    }

    const newNote = {
        title: notesInput.title,
        note: notesInput.note,
        user_id: user.value.id,
    };

    emit("create-notes", newNote);

    notesInput.title = "";
    notesInput.note = "";
};
</script>

<template>
    <NCard class="card">
        <input placeholder="My Notes Title" v-model="notesInput.title" />
        <textarea placeholder="My Note" v-model="notesInput.note"></textarea>
        <NButton @click="handleSubmit">Save Notes</NButton>
    </NCard>
</template>

<style>
.card {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
}

input,
textarea {
    border: 0.1rem solid rgba(0, 0, 0, 0.3);
    margin-bottom: 0.5rem;
    padding: 0.2rem;
}
</style>