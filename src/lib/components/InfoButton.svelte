<script lang="ts">
    let modal: any;
</script>

<button class="btn btn-square btn-xs" on:click={() => modal.showModal()}><img src="https://img.icons8.com/info" class="not-prose h-4 w-4" alt="learn more"/></button>
<dialog bind:this={modal} class="modal modal-bottom sm:modal-middle not-prose">
    <div class="modal-box">
      <slot/>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
</dialog>