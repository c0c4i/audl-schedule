<template>
  <div class="bg-gray-100 min-h-screen min-w-screen">
    <div class="max-w-xl mx-auto px-4 sm:px-6 pt-4">
      <h1 class="text-2xl font-bold mb-2">AUDL Schedule</h1>

      <h1 class="text-xl font-bold mb-2 mt-4">Upcoming Matches</h1>
      <game-card v-for="game in upcomingMatches" :key="game.id" :game="game" />

      <h1 class="text-xl font-bold mb-2 mt-4">Passed Matches</h1>
      <game-card v-for="game in passedMatches" :key="game.id" :game="game" />

    </div>
  </div>
</template>

<script>

import { Game } from '@/types/Game';
import GameCard from '~/components/GameCard.vue';

export default {
  components: { GameCard },
  data() {
    return {
      games: []
    };
  },
  async mounted() {
    try {
      const response = await $fetch('https://www.backend.audlstats.com/web-api/games?sidebar');
      response.games.sort((a, b) => {
        return new Date(a.startTimestamp) - new Date(b.startTimestamp);
      });
      this.games = response.games.map((game) => Game.fromJson(game));
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    passedMatches() {
      return this.games.filter(game => {
        return new Date(game.date) < new Date();
      });
    },
    upcomingMatches() {
      return this.games.filter(game => {
        return new Date(game.date) > new Date();
      });
    }
  }
};
</script>