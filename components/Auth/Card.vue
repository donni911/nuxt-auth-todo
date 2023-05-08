<script setup lang="ts">
const authState = ref<"login" | "signup">("login");
const authError = ref("");
const showConfirmEmailMessage = ref(false);

const router = useRouter();

const { signUp, signIn, user } = useAuth();

const input = reactive({
    email: "rodion2001vo@gmail.com",
    password: "",
});

const toggleAuthState = () => {
    authError.value = "";
    if (authState.value === "login") {
        authState.value = "signup";
    } else {
        authState.value = "login";
    }
};

// const handleSignOut = async () => {
//     await signOut();
//     authError.value = "";
//     input.email = "";
//     input.password = "";
// };

const handleSubmit = async () => {
    try {
        if (authState.value === "login") {
            await signIn({ email: input.email, password: input.password });

            router.push("/myprofile");
        } else {
            await signUp({ email: input.email, password: input.password });
            showConfirmEmailMessage.value = true;
        }

        input.email = "";
        input.password = "";
        authError.value = "";
    } catch (error: any) {
        authError.value = error.message;
    }
};
</script>

<template>
    <div>
        <NCard class="card">
            <div v-if="!showConfirmEmailMessage">
                <h3>{{ authState }}</h3>
                <div class="input-container">
                    <input
                        type="email"
                        placeholder="Email"
                        name=""
                        id=""
                        v-model="input.email"
                        @keyup.enter="handleSubmit"
                    />
                    <input
                        placeholder="Password"
                        type="password"
                        autocomplete="off"
                        name=""
                        id=""
                        v-model="input.password"
                        @keyup.enter="handleSubmit"
                    />
                </div>
                <div class="flex">
                    <NButton class="mr-2" @click="handleSubmit">Submit</NButton>
                    <!-- <NButton @click="handleSignOut" v-if="user">Log out</NButton> -->
                </div>
                <p v-if="authError" class="error">{{ authError }}</p>
                <p @click="toggleAuthState">
                    {{
                        authState === "login"
                            ? "Don't hav an account? Create one now!"
                            : "Already have an account? Login!"
                    }}
                </p>
            </div>
            <div v-else>
                <h3>Check email for confirmation sign up</h3>
            </div>
        </NCard>
    </div>
</template>

<style scoped>
.card {
    padding: 1rem;
    width: 25rem;
}

.card h3 {
    font-size: 1.75rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
}

.input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.input-container input {
    outline: none;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.12rem;
    margin-bottom: 0.6rem;
    padding: 0.2rem;
}

p {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: blue;
    cursor: pointer;
}

.error {
    color: red;
}
</style>