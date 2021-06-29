// Code MovieReviews Here
import React from 'react'

const movieReview = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return(
        <div
            key={headline}
            className="review"
        >
            <header>
                <a
                    className="link"
                    href={link.url}
                >
                    {headline}
                </a>
                <p>{summary_short}</p>
            </header>


        </div>
    )
}

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(movieReview)}</div>



export default MovieReviews