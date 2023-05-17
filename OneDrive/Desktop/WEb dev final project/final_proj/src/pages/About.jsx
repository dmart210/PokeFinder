
function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Pokemon Finder</h1>
      <p>Simple Pokemon finder that takes in a pokemon name, and renders the image of the pokemon and some details about it. </p>
      <label className="swap swap-flip text-9xl">
      <input type="checkbox" />
      
      <div className="swap-on">😈</div>
      <div className="swap-off">😇</div>
    </label>
    </div>
  )
}

export default About