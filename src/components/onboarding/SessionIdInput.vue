<template>
    <div class="session-id-input-container">
        <input class="session-id-input" type="text" placeholder="Podaj ID sesji" />
        <button class="session-id-button" type="submit">
            →
        </button>
    </div>
</template>

<style lang="scss" scoped>

.session-id-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #333;
    border-radius: 5px;

    background: white;
}

.session-id-input {
    border: none;
    background: none;
    font-size: 20px;
    padding: 20px 40px;
    flex: 1;

    &:focus {
        outline: 2px solid #669BBC;
        border-radius: 5px 0 0 5px;
    }
}

.session-id-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 10px 25px;
    height: 100%;
    font-size: 25px;
    border-radius: 0 5px 5px 0;

    transition: background-color 0.25s ease;

    &:hover {
        background-color: #669BBC;
    }
}
</style>