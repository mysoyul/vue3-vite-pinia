<template>
    <div class="row mt-4">
        <h4 class="text-center">New Post</h4>
        <form @submit="onSubmit">
            <div class="form-group">
                <label><strong>Email : </strong></label>
                <input type="email" v-bind="email" class="form-control" />
                <div v-show="errors.email" class="alert alert-danger">{{ errors.email }}</div>
            </div>
            <div class="form-group">
                <label><strong>Title : </strong></label>
                <input type="text" v-bind="title" class="form-control" />
                <div v-show="errors.title" class="alert alert-danger">{{ errors.title }}</div>
            </div>
            <div class="mt-4 text-center">
                <button class="btn btn-success">Save</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { usePostListStore } from '@/stores/usePostStore'
import { useForm } from 'vee-validate';
import * as yup from 'yup'
import type Post from "@/types/Post";

const store = usePostListStore()
const router = useRouter()

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        title: yup.string().required(),
    }),
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
    store.addPost(values as Post).then(() => {
        router.push('/posts');
    });
});

const email = defineInputBinds('email');
const title = defineInputBinds('title');

</script>

<style scoped>
input {
    margin: 1rem 0;
}
</style>