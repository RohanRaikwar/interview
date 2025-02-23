import './ReviewCard.css'

export default function ReviewCard() {
    return (
      <div className="review-card-wrapper">
        <div className="review-card">
          <div className="review-header">
            <div className="user-info">
              <div className="avatar">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2065-DMn1TM6i1EwjR3Bw2Ryou795c8cvVc.png"
                  alt="User avatar"
                />
              </div>
              <div className="user-details">
                <div className="user-name">Andr Grown</div>
                <div className="user-handle">@users9384</div>
              </div>
            </div>
            <div className="timestamp">3 hours ago</div>
          </div>
  
          <div className="review-content">
            <p className="review-text">Best serivce I ever used</p>
            <p className="review-mention">
              It finally arrived. TY <span className="mention">@HypeDrop</span> Lemme know which <p className="review-mention">case I should open to
              honor this moment</p> 
            </p>
          </div>
  
          <div className="review-images">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2065-DMn1TM6i1EwjR3Bw2Ryou795c8cvVc.png"
              alt="PS5 image 1"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2065-DMn1TM6i1EwjR3Bw2Ryou795c8cvVc.png"
              alt="PS5 image 2"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2065-DMn1TM6i1EwjR3Bw2Ryou795c8cvVc.png"
              alt="PS5 image 3"
            />
          </div>
  
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }