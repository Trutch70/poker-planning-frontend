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
    getRoomDetails: async (roomId: string) => {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_API_HOST}/rooms/${roomId}`);

      return await response.json();
    },
    submitEstimate: async (taskId: string, username: string, estimate: string) => {
      await fetch(`${import.meta.env.VITE_PUBLIC_API_HOST}/tasks/${taskId}/estimate`, {
        method: 'PATCH',
        body: JSON.stringify({
          username,
          estimate
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
};
