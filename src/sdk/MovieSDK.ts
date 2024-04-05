import axios, {AxiosResponse} from 'axios';

interface Movie {
  id: string;
  title: string;
  description: string;
  poster: string;
  actors: string[];
  reviews: string[];
  keywords: string[];
}

class MovieSDK {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchRandomMovies(count: number, q: string): Promise<Movie[]> {
    try {
      const response: AxiosResponse<Movie[]> = await axios.get(
        `${this.baseUrl}`,
        {
          params: {count, q},
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching random movies:', error);
      return [];
    }
  }

  async searchMovies(q: string): Promise<Movie[]> {
    try {
      const response: AxiosResponse<Movie[]> = await axios.get(
        `${this.baseUrl}`,
        {
          params: {q},
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  }

  async getMovieDetails(id: string): Promise<Movie | null> {
    try {
      const response: AxiosResponse<Movie> = await axios.get(
        `${this.baseUrl}?tt=${id}`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  }
}

export default MovieSDK;
