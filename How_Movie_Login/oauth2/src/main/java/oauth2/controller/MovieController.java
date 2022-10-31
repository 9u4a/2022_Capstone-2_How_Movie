package oauth2.controller;

import oauth2.entity.Movie;
import oauth2.entity.dto.MovieDto;
import oauth2.entity.dto.ReviewDto;
import oauth2.service.movie.MovieService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/movie")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable Long id) {
        return movieService.getMovie(id);
    }

    @GetMapping("/review/{id}")
    public Boolean checkMovieReview(@PathVariable Long id) {
        return movieService.checkMovieReview(id);
    }

    @PostMapping
    public void movie(@RequestBody MovieDto movieDto) {
        movieService.saveMovie(movieDto);
    }

    @PostMapping("/review")
    public void review(@RequestBody ReviewDto reviewDto) {
        movieService.saveReview(reviewDto);
    }

    @DeleteMapping("/review/delete")
    public void deleteReview(@RequestParam Long movieId, @RequestParam Long reviewId) {
        movieService.deleteReview(movieId, reviewId);
    }

}
