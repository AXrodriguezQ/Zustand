import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Post {
    id: number
    title: string
    body: string
}

interface CounterState {
    count: number
    name: string
    posts: Post[]
    increment: ( value: number ) => void
    getPosts: () => void
    clearStore: () => void
    multiplay: ( value: number ) => void
}

export const useCounterStore = create<CounterState>()(persist((set, get) => ({
    count: 10,
    name: "Juan",
    posts: [],
    increment: (value:number) => set(state => ({
        count: state.count + value
    })),
    getPosts: async () => {
        const posts = await (await fetch('http://jsonplaceholder.typicode.com/posts')).json()
        set(state => ({
            ...state,
            posts
        }))
    },
    clearStore: () => {
        set({}, true)
    },
    multiplay: (value: number) => {
        const { count } = get()
        set({ count: count * value })
    }
}), {
    name: 'count'
}))
