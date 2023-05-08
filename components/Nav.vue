
<script setup lang="ts">
const { signOut, user, isLoggedIn } = useAuth();
</script>

<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/myprofile">My Profile</NuxtLink>
            </li>
            <li>{{ user?.email }}</li>
            <li @click="signOut" v-if="isLoggedIn()">Log Out</li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    background: #000;
    height: 10vh;
}

ul {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 2rem;
    padding: 0 2.5rem;
}

li:last-child {
    margin-left: auto;
    cursor: pointer;
}
</style>