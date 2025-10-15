export const boberAPI = {
    joinRoom: async (roomId: string) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_HOST}/rooms/${roomId}/join`, {
                method: 'POST'
            });

            return await response.json();
        } catch (e) {
            console.log('kurde no', e);
        }
    },
};
