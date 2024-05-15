<script lang="ts">
    export let images: string[]

    if (images.length != 4)
        throw new Error("Galery4 accepts only 4 images!")

    let batches = [
        [images[0], images[1]],
        [images[2], images[3]]
    ]

</script>


<div class="grid grid-cols-2 gap-2 not-prose">
    {#each batches as batch}
        <div class="grid gap-2">
            {#each batch as image}
                <enhanced:img class="h-auto max-w-full rounded-lg" src={image} alt=""/>
            {/each}
        </div>
    {/each}
</div>

