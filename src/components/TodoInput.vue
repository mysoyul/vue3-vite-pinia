<template>
    <div class="inputBox shadow">
        <input type="text" autofocus :value="newTodoItem" @input="handleInput" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <MyModal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                <h3>
                    경고!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3>
            </template>
            <template v-slot:body>
                <div>아무것도 입력하지 않으셨습니다.</div>
            </template>
        </MyModal>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import MyModal from '@/components/common/MyModal.vue';
import { useTodoListStore } from '@/stores/useTodoStore'
import type TodoItem from '@/types/TodoItem'

const store = useTodoListStore()
const showModal = ref(false)

const newTodoItem = ref<string>("")
const emit = defineEmits(["change:todo", "add:todo"])

const handleInput = (event: Event) => {
    const myValue = (event.target as HTMLInputElement).value
    emit("change:todo", myValue)
    newTodoItem.value = myValue
}

const addTodo = () => {
    if (newTodoItem.value !== "") {
        const todoItemStr = newTodoItem.value
        const itemObj  = { completed: false, item: todoItemStr } 
        store.addTodo(itemObj)
        clearInput()
    } else {
        showModal.value = !showModal.value
    }
}

const clearInput = () => {
    newTodoItem.value = ""
}

</script>

<style scoped>
.closeModalBtn {
    color: #42b983;
}

i,
span {
    cursor: pointer;
}

input:focus {
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 80%;
    height: 40px;
}

.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn {
    color: white;
    vertical-align: middle;
}
</style>