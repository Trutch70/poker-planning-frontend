

<template>
    <nav>
        <div class="app-banner">
            <h1 class="app-title">BOBER PLANNING</h1>
            <img class="logo" src="/bober.svg" alt="Bober Logo" />
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .app-banner {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #0E0B32;
        border-bottom: 1px solid #dee2e6;
        gap: 10px;
        justify-content: center;
    }

    .logo {
        display: inline-block;
        width: 100px;
        transform: scale(1.5) translate(15px, 8px);
    }

    .app-title {
        display: inline-block;
        font-size: 1.5rem;
        font-weight: bold;
        color: #eee;
        text-transform: uppercase;
    }
</style>