package oauth2.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    private float score;

    private String rating;

    public Review(Movie movie, User user, float score, String rating) {
        this.movie = movie;
        this.user = user;
        this.score = score;
        this.rating = rating;
    }
}
