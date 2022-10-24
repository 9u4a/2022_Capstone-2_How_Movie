package oauth2.entity.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewDto {

    private Long movieId;

    private Long userId;

    private float score;

    private String rating;

}
