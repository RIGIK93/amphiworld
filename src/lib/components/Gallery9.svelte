<script lang="ts">
    export let images: string[]

    if (images.length != 9)
        throw new Error("Galery9 accepts only 9 images!")

    let batches = [
        [images[0],images[1],images[2]],
        [images[3],images[4],images[5]],
        // [images[6],images[7],images[8]],
    ]
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-2 not-prose">
    {#each batches as batch}
        <div class="grid gap-2">
            {#each batch as image}
                <enhanced:img class="h-auto max-w-full rounded-lg" src={image} alt=""/>
            {/each}
        </div>
    {/each}
    <div class="grid gap-2">
        {#each [images[6],images[7],images[8]] as image}
            <enhanced:img class="h-auto max-w-full rounded-lg max-md:hidden" src={image} alt=""/>
        {/each}
    </div>
</div>