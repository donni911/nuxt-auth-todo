<script setup lang="ts">
const { notes, deleteNote, createNote } = await useTodos();

definePageMeta({
    middleware: "auth",
});
</script>
<template>
    <div>
        <div class="container">
            <h3>My Notes</h3>
            <NotesForm @create-notes="createNote" />
            <div v-if="notes.data && notes?.data.length" class="card-container">
                <NCard
                    v-for="note in notes.data"
                    :key="note.id"
                    class="card"
                    @click="deleteNote(note.id)"
                    ><h2>{{ note.title }}</h2>
                    <p>{{ note.note }}</p>
                </NCard>
            </div>
            <div v-else>
                <NCard>
                    <h3>Add note!</h3>
                </NCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 50%;
    margin: 0 auto;
    padding: 3rem 0;
    height: 90vh;
}
h3 {
    font-size: 3rem;
}

.card {
    padding: 2rem;
}

h2 {
    font-weight: bold;
    font-size: 1.5rem;
}

.card-container {
    margin-top: 1.5rem;
}
</style>