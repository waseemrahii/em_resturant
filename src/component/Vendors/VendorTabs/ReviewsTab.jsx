import { memo } from "react"
import { FaStar, FaUser } from "react-icons/fa"

const ReviewsTab = memo(({ reviews }) => {
  if (!reviews) {
    return (
      <div className="text-center py-12">
        <FaStar className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">Loading Reviews...</h3>
      </div>
    )
  }

  if (!reviews.data || reviews.data.length === 0) {
    return (
      <div className="text-center py-12">
        <FaStar className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">No Reviews Yet</h3>
        <p className="text-gray-500 mt-1">This vendor hasn't received any reviews yet.</p>
      </div>
    )
  }

  const averageRating = reviews.stats?.averageRating || 0
  const totalRatings = reviews.stats?.totalRatings || 0
  const ratingBreakdown = reviews.stats?.ratingBreakdown || []

  return (
    <div>
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating Summary</h3>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <span className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            <div className="ml-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">{totalRatings} reviews</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => {
            const ratingCount = ratingBreakdown.find((r) => r._id === rating)?.count || 0
            const percentage = totalRatings ? (ratingCount / totalRatings) * 100 : 0

            return (
              <div key={rating} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{rating} stars</div>
                <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                <div className="w-12 text-sm text-gray-600">{ratingCount}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="space-y-6">
        {reviews.data.map((review) => (
          <div key={review._id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaUser className="text-gray-500" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.user?.name || "Anonymous User"}</h4>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className={star <= review.rating ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{review.comment}</p>
            {review.reply && (
              <div className="mt-4 pl-4 border-l-2 border-gray-200">
                <p className="text-sm font-medium text-gray-700">Vendor's Reply:</p>
                <p className="text-sm text-gray-600 mt-1">{review.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})

export default ReviewsTab
