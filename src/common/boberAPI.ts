export const boberAPI = {
    joinRoom: async (roomId: string) => {
        try {
            console.log(process.env.API_HOST);
            const response = await fetch(`${import.meta.env.PUBLIC_API_HOST}/rooms/${roomId}/join`, {
                method: 'POST'
            });

            return await response.json();
        } catch (e) {
            console.log('kurde no', e);
        }
    },
};