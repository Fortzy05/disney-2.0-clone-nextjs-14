import MoviesCarousel from "@/components/MoviesCarousel"
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/lib/getMovies";
export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
    
    {/* carouselBannerWrapper */}
    <div className="flex flex-col space-y-2 xl:-mt-48">
      {/* MovieCarousel */}
      <MoviesCarousel movies={upcomingMovies} title="upcoming" isVertical/>
      <MoviesCarousel movies={topRatedMovies} title="Top Rated" isVertical/>
      <MoviesCarousel movies={popularMovies} title="Popular" isVertical/>
    </div>
    </main>
  )
}
