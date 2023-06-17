<template>
    <div :key="game.id" class="flex items-center justify-center h-full shadow-lg my-2">
        <div class="max-w-xl w-full bg-white rounded-xl p-4 flex flex-col justify-between leading-normal">
            <p class="text-sm text-gray-600 flex items-center">
                {{ localeDate }}
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">
                {{ game.awayTeam }} vs {{ game.homeTeam }}
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {{ game.status }}
                </span>
            </div>

            <p class="text-gray-700 text-base mb-2">
                <!-- Open blank -->
                <a :href="game.url" target="_blank" class="text-blue-500">{{ game.url }}</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Game } from '~/types/Game'

export default {
    props: {
        game: {
            type: Game,
            required: true
        }
    },
    computed: {
        // DD/MM/YYYY HH:MM
        localeDate() {
            return new Date(this.game.date).toLocaleString(
                undefined, // Use browser locale
                {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }

            );
        }
    }
}
</script>

<style></style>