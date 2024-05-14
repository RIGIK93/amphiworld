<script lang="ts">
    import type {Question2} from "$lib"

    export let questions: Question2[];
    export let title: string
    export let options: [string, string]

    let state: "pending" | "right" | "wrong" = "pending"

    let question_number = 0

    function next() {
        state = "pending"
        question_number = (question_number + 1) % questions.length
    }
</script>

<div class="bg-base-200 rounded-lg p-5 not-prose">
    <h2 class="text-2xl mb-5 font-bold">{title}</h2>
    <enhanced:img class="w-full rounded-xl" src={questions[question_number].img} />
    <progress class="progress progress-primary w-full my-2" value={question_number/questions.length} max="1"></progress>
    <div class="flex gap-2 justify-center mt-4">
        {#if state == "pending"}
            <button class="btn btn-outline w-1/2" on:click={() => {state = (questions[question_number].answer == "first") ? "right" : "wrong"}}>{options[0]}</button>
            <button class="btn btn-outline w-1/2" on:click={() => {state = (questions[question_number].answer == "second") ? "right" : "wrong"}}>{options[1]}</button>
        {/if}

        {#if state == "right"}
            <button class="btn btn-success w-full" on:click={next}>Correct! Next</button>
        {/if}

        {#if state == "wrong"}
            <button class="btn btn-error w-full" on:click={next}>Incorrect! Next</button>
        {/if}
        
    </div>
</div>