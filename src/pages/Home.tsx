import './styles/Home.scss';


export default function Home() {
  return (
    <div id="home_header">
      <div id="picture_and_welcome_container">
        <div id="header_picture">
          <img id='image' src="src\assets\cowboy-icon.png" alt="placeholder image" />
        </div>
        <div id="welcome">
          <p id="welcome_name">hey, i'm mason</p>
          <p id="welcome_title">software developer</p>
          <div id='infobox'>
            <ul>
              <li>jazz musician</li>
              <li>QMUL school of philosophy alumnus</li>
              <li>abstract programming language appreciator</li>
              <li>favorite doom 2 map: E2M4</li>
            </ul>
          </div>
        </div>
      </div>
      <div id='header_paragraphs'>
        <div id='header_paragraph_one'>
          <p id='about_me_title'>who am i</p>
          <p>
            i'm mason. I was born and raised in a <a href="https://en.wikipedia.org/wiki/Chattooga_County,_Georgia">
            particularly rural part of the Southern United States</a> and moved
            to France in 2019 in an attempt to build a nice life and get a better education. But that's 
            not particularly important.
            What is important is that I like to build things. Specifically, I love to build big, complex 
            (and preferably strange) things from thousands of tiny tiny rules. Programming is an obvious 
            fit for such a passion, and I've been working with, learning, and studying programming 
            and programming languages for quite a long time.
          </p>
          <p>
            I think I wrote my first Python programs when I was ten and playing around with
            the (now sadly deprecated since v2.8) <a href="https://github.com/blender/blender">Blender 
            Game Engine</a>. I didn't write many programs over the next few years because I 
            got really busy with trying to launch an ill-fated career as a jazz musician, but 
            I still spent a lot of time on <a href="https://projecteuler.net/">
            Project Euler</a> and various YouTube tutorials in an attempt to learn C/C++ 
            in what is perhaps the worst and most inefficent way possible.
          </p>
          <p>
            Nevertheless, I thought it was fun. And everytime I managed to scrape a new, working 
            algorithm together I thought it was even more fun. So I thought "I bet it would be even
            more fun if I actually put a full program together instead of just solving math problems." 
            And I was right! In fact, I was so right that I started making lots and lots of programs
            because it was so fun. You can read about some of the more interesting ones on 
            the <a href="http://localhost:5173/projects">projects page</a>.
          </p>
          <p>
            When I wasn't making music or programming, I was studying philosophy, working in museums,
            teaching, training teachers, or managing schools. 
            All things I also quite like, presumably as a result of my aforementioned appreciation 
            for complex systems made of tiny parts. I was even published
            not too long ago for a piece I wrote about the architecture of Ivry-sur-Seine. I actually 
            wrote a lot (and still do, from time to time!) and you can read <i>some</i> of that on 
            the <a href="http://localhost:5173/blog">blog page</a>, if you are ever so inclined.
          </p>
          <p>
            After I graduated, I spent a lot of time thinking about my career. I was at that point
            a manager and pedagogical coordinator at rather well-distingushed English school in Paris, and
            it was a nice job, but the lack of challenge or sense of improvment started to weigh on me. I was
            going home each day after work just looking forward to programming and eventually I really started
            to dislike going to work, as it pulled my focus away from my projects and so I decided to bite the bullet,
            go back to school, and do the thing that made me happy. 
          </p>
        </div>
        <div id='header_paragraph_two'>
          <p>
            hummina hulmina gimllain imgkinf fnfjknf fj fjknfjk sjv sjnjk
          </p>
          <p>
            blaljdfkslfjskl jdsfkl sjdfk ldsjfk ldsjf ksdljfkjksldfkj
          </p>
        </div>
      </div>
    </div>
  );
}
