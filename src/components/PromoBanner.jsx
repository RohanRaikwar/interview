import './PromoBanner.css'
export default function PromoBanner() {
    return (
      <div className="promo-container">
        <div className="promo-panel left-panel">
          <h1>Sign Up today and claim your FREE box</h1>
          <p>
            Unlock YOUR Free Box Today! Each box is a treasure trove of excitement waiting to be discovered. Don't miss
            out – dive into the unknown with us!
          </p>
          <button className="claim-button">Claim now</button>
        </div>
  
        <div className="promo-panel center-panel">
          <div className="product-showcase">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202131328797-MYN6epWiu5PwwtrHuIMq9JAwMl7HgC.png"
              alt="Luxury watches collection"
              className="showcase-image"
            />
            <span className="free-tag left">Free</span>
            <span className="free-tag right">Free</span>
          </div>
        </div>
  
        <div className="promo-panel right-panel">
          <div className="content-wrapper">
            <h2>
              Earn up to 10% on deposits from your friends
              <span className="percentage-badge">5%</span>
            </h2>
            <p>Give your friends a 5% bonus added to all their cash deposits</p>
            <button className="refer-button">Refer a friend</button>
          </div>
        </div>
      </div>
    )
  }
  
  