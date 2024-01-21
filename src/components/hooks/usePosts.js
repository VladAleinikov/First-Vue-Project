import axios from 'axios'
import { onMounted, ref } from 'vue'

export function usePosts(limit) {
      const posts = ref([])
      const totalPages = ref([])
      const isPostLoading = ref(true)

      const fetching = async () => {
            try {
                  const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                              _page: 1,
                              limit: limit
                        }
                  });
                  totalPages.value = Math.ceil(responce.headers['x-total-count'] / limit)
                  posts.value =  responce.data;

            } catch (error) {
                  alert('Ошибка!')
            }
            finally {
                  isPostLoading.value = false;
            }
      }

      onMounted(fetching);

      return {
            posts, isPostLoading, totalPages
      }
}