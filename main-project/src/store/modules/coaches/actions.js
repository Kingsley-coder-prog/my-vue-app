export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-app-9c5d5-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (response.ok) {
      // error
    }

    // const responseData = await response.json();

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
