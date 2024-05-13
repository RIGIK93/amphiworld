<script lang="ts">
    import frogs from "$lib/images/frogs/index";
    import Galery9 from "$lib/components/Galery9.svelte";

    import salamanders from "$lib/images/salamanders";
    import Galery4 from "$lib/components/Galery4.svelte";

    import CAECILIAN from "$lib/images/caecilian.png?enhanced"
    import WOOD_FROG from "$lib/images/wood_frog.webp?enhanced"
    import FROGALITY_MAP from "$lib/images/Global-Amphibian-Species-Richness-Map.webp?enhanced"
    import InfoButton from "$lib/components/InfoButton.svelte";
    import AXOLOTL from "$lib/images/axolotl.jpg?enhanced"
</script>

<svelte:head>
    <title>Amphibian World</title>
    <meta name="description" content="A Place to Appreciate Our Amphibian Friends"/>

    <meta name="og:title" content="Amphibian World"/>
    <meta name="og:description" content="A Place to Appreciate Our Amphibian Friends"/>
    <meta name="og:image" content="/og_cover.jpg"/>
</svelte:head>

<header class="md:w-1/2 mx-5 md:mx-auto my-10">
    <h1 class="text-4xl sm:text-6xl md:text-7xl text-primary text-start md:text-end font-extrabold">Welcome to the Exciting World of Amphibians!</h1>
    <div class="flex justify-center">
        <p class="my-3 text-primary-content max-w-[63ch] text-lg">Amphibians are scaleless cold-blooded (temperature varies with the environment) <a class="link" href="https://en.wikipedia.org/wiki/Vertebrate">vertebrates</a> (have backbones). They live part of their lives in water and part on land.</p>
    </div>
</header>

<main class="mx-5 md:mx-auto my-10 prose">
    

    <!-- https://amphibiaweb.org/amphibian/speciesnums.html -->
    <div class="flex justify-center max-lg:hidden">
        <div class="stats stats-horizontal shadow">
  
            <div class="stat">
              <div class="stat-title">Species</div>
              <div class="stat-value">8,739</div>
              <div class="stat-desc">May 12, 2024</div>
            </div>
            
            <div class="stat">
              <div class="stat-title">Frogs&Toads</div>
              <div class="stat-value">7,701</div>
              <div class="stat-desc">88%</div>
            </div>
            
            <div class="stat">
              <div class="stat-title">Salamanders</div>
              <div class="stat-value">816</div>
              <div class="stat-desc">9%</div>
            </div>
    
            <div class="stat">
                <div class="stat-title">Caecilians</div>
                <div class="stat-value">222</div>
                <div class="stat-desc">3%</div>
            </div>
            
        </div>
    </div>

    <div class="grid grid-cols-2 gap-4 lg:hidden">
        <div class="stats stats-horizontal shadow">
            <div class="stat">
              <div class="stat-title">Species</div>
              <div class="stat-value">8,739</div>
              <div class="stat-desc">May 12, 2024</div>
            </div>
        </div>

        <div class="stats stats-horizontal shadow">
            <div class="stat">
                <div class="stat-title">Frogs&Toads</div>
                <div class="stat-value">7,701</div>
                <div class="stat-desc">88%</div>
            </div>
        </div>

        <div class="stats stats-horizontal shadow">          
            <div class="stat">
              <div class="stat-title">Salamanders</div>
              <div class="stat-value">816</div>
              <div class="stat-desc">9%</div>
            </div>
        </div>
    
        <div class="stats stats-horizontal shadow">
            <div class="stat">
                <div class="stat-title">Caecilians</div>
                <div class="stat-value">222</div>
                <div class="stat-desc">3%</div>
            </div>
        </div>
    </div>

    <article class="prose my-10">
        <p>Amphibians have evolved about 365M years ago from a lobe-finned lungfish ancestor. 
            They are considered to be the earliest land vertebrates, and this fact allowed 
            them to strive. They were the dominant land vertebrates for more than a 100M years 
            (but then pesky reptiles evolved from them, taking their crown as the kings of vertebrates)!</p>
    </article>

    <!-- Fun Facts -->
    <!-- https://www.thoughtco.com/facts-about-amphibians-4069409 -->
    <article class="prose my-10">
        <h1>Fun (and Other) Facts</h1>
        <ul>
            <li>Undergo Metamorphosis <!-- <InfoButton><h3 class="font-bold text-lg">Some!</h3><p class="py-4">Thing!</p></InfoButton> --> </li>
            <li>Must Live Near Water</li>
            <li>Skin Surface Respiration</li>
            <li>Have Extremely Primitive Lungs</li>
            <li>Are Among World's Most Endangered Animals</li>
            <li>Double-channeled Hearing System</li>
            <li>Cold-Blooded</li>
            <li>Used to be Way Larger</li>
        </ul>
    </article>

    <!-- Frogs -->
    <article class="prose my-10">
        <h1>Frogs&Toads</h1>

        <!-- https://flowbite.com/docs/components/gallery/ -->
        <Galery9 images={frogs}/>

        <!-- origins -->

        <p>Though the first amphibian, <a class="link" href="https://ucmp.berkeley.edu/vertebrates/tetrapods/amphibfr.html">Ichthyostega</a>, 
            looked more like a salamander, than a frog, today frogs are the most numerous amphibians.
            We all probably agree that Toads and Frogs are pretty similar 
            (they are even from the same order Anura of the class Amphibia), but have you ever wondered what is the difference?
            Some of you may know the difference, or <i>even feel it</i>, but have thou <b>CLASSIFIED IT</b>?
        </p>

        <h2>How to Tell a Frog and a Toad Apart?!</h2>

        <!-- https://www.reconnectwithnature.org/news-events/the-buzz/what-s-the-difference-frog-vs-toad/ -->
        <p>
            Settling a debate Congress theoretically could rant about for 3 years (or more) Toads <u>are FROGS</u>!
            Haha! Got you! Didn't expect this turn of events, did you? Well, actually toads are a "are a sub-classification of frogs,"
            so we still have to know how to tell them apart. 
            As I already mentioned, both frogs and toads are a part of the order Anura (which translates to "without a tail").
            This order, among others, has two families: Ranidae (referred to as "true frogs") and Bufonidae (referred to as &mdash; you guessed it &mdash; "true toads").
            Excited to know the difference?
            Behold! I compared (actually, just Googled, but we will not mention it) these families for you:
        </p>

        <div class="flex w-full max-md:flex-col">
            <div class="grid w-full md:w-1/2 flex-grow card rounded-box place-items-center">
                <b>Ranidae (Frogs)</b>
                <ul>
                    <li>Long, strong hind legs that aid them in leaping</li>
                    <li>Frogs will use their long, strong legs to leap into the water when approached</li>
                    <li>Frogs have big, bulging eyes.</li>
                    <li>Frogs have smooth or slimy skin that is moist.</li>
                    <li>Not all frogs are poisonous.</li>
                    <li>Frog eggs are usually one mass or cluster</li>
                </ul>
            </div>
            <div class="divider divider-vertical md:divider-horizontal">VS</div>
            <div class="grid w-full md:w-1/2 flex-grow card rounded-box place-items-center">
                <b>Bufonidae (Toads)</b>
                <ul>
                    <li>Shorter hind legs more suitable for walking than hopping.</li>
                    <li>Toads are likely to sit still and wait it out (If toads do jump away, their jumps are shorter than frogs').</li>
                    <li>Toads' eyes are more subtle in appearance.</li>
                    <li>Toads have thicker, bumpy skin that is usually dry.</li>
                    <li>All toads are poisonous.</li> <!-- Make an info button here: Toads have parotoid glands behind their eyes that secrete toxins. These toxins permeate their skin, so you can come into contact with them if you pick them up. Most of the toxins are mild to humans, but you should always wash your hands thoroughly with soap and water after handling a toad. -->
                    <li>Toad eggs are usually arranged in a chain.</li>
                </ul>
            </div>
        </div>

        
        <!-- Tell them apart (game) -->

        <!-- https://artsandculture.google.com/story/the-first-leap-frogs-friends/9wVhMka7ZCEqIA?hl=en -->
        <h2>Origins</h2>

        <p>
            How dare you call yourself a frog fan without knowing how frogs appeared &mdash; I asked myself one day.
            And you should ask this question too. Curiosity is the key to success, survival and life, you know.
            Turns out there is an excellent presentation on Google's Arts&Culture Website by someone named Frogs&Friends called <a href="https://artsandculture.google.com/story/the-first-leap-frogs-friends/9wVhMka7ZCEqIA?hl=en" class="link">"The First Leap"</a>.
            You a 100% have to open it up. It is nice and short. 
            But, in short, 290M years ago a frogmander (half-frog, half-salamander) Gerobatrachus appeared. 
            Then, 250M years ago the first frog Triadobatrachus massinoti has appeared!
        </p>

        <h2>Habitat</h2>

        <p>
            In short, they live on every continent, except Antarctica. 
            Which is good, unless you don't like Frogs. 
            In which case you should go to Antarctica because WHAT IS WRONG WITH YOU?!
        </p>

        <div class="card lg:card-side bg-base-100 shadow-xl not-prose">
            <figure><enhanced:img class="h-full object-cover overflow-hidden" src={WOOD_FROG} alt="Wood Frog Image"/></figure>
            <div class="card-body">
                <h2 class="card-title">Wood Frog Appreciation Stand</h2>
                <p>
                Honestly, Wood Frogs have earned the spotlight. 
                They are <u>the only</u> frogs that live North of the arctic circle.
                They're so tough they should be mentioned on the Joe Rogan's podcast along with polar bears.
                Here, just <a class="link" href="https://alaskausfws.medium.com/wood-frogs-of-the-far-north-cd8e987e3cce">read more</a> about them.
                </p>
            </div>
        </div>

        <p>
            In long, here's the "Frogality Map" which I "borrowed" from <a class="link" href="https://www.sciencefriday.com/educational-resources/design-a-frog/">this website</a>.
        </p>

        <enhanced:img class="rounded-lg" src={FROGALITY_MAP} alt="Global Amphibian Species Richness Map" />

        <p>
            This map clearly shows that there are a lot of frogs. 
            It also shows that you should move to South America because it has the largest number of our favorite frogs.
            But why are there so many frogs in this specific region? 
            Perhaps, if we were to figure out the conditions that our frog friends liked, we could have set up an elaborate chain of lobying and propaganda
            that would create global climate crisis and undermine its effects in order to make the world climate suitable for our frog friends to <b>OCUPPY ThE ENTIRE WORLD!</b>
        </p>

        <p>
            In reality, frogs and toads are so diverse that some prefer cold and some prefer hot environemnts.
            It is just so hapenned that there are a lot of frog species in the tropics, due to favorable rich-in-nutrients conditions. 
            Remember! 
            By changing the environemnt you'll be destroying the habitat of the frogs living at the extremes, so just don't change the environment.
            Save the wood frog!
        </p>

        <!-- https://www.lfwseq.org.au/creating-frog-friendly-habitats/ -->
        <p>
            Besides the environment, frogs need a place to hide and a place to breed. 
            For the former, they prefer a cool and moist place, sheltered from weather and predators.
            For the latter, most require a "permanent source of moisture" such as a pond, dam or river (though it differs from frog to frog).
        </p>

        <h2>Food</h2>

        <!-- https://www.woodlandtrust.org.uk/blog/2019/03/what-do-frogs-eat/#:~:text=Small%20frogs%20eat%20insects%20such,on%20plants%20and%20small%20insects. -->
        <p>
            Frogs eat insects such as flies and moths, as well as snails, slugs and worms. They use long tongues and sticky saliva to catch prey that passes them by (Rachel Hoskins). 
            Tadpoles eat algae in the ponds they grow in (Rachel Hoskins).
            As they grow, they feed on plants and small insects (Rachel Hoskins). 
            If there isn't enough food available they might even eat their fellow tadpoles (Rachel Hoskins).
        </p>

        <!-- Metamorphosis -->

        <!-- Frog Ponds -->
    </article>

    <!-- Salamanders -->

    <article class="prose my-10">
        <h1>Salamanders</h1>

        <Galery4 images={salamanders}/>

        <h2>Don't Call It a Lizard!</h2>

        <p>
            Salamanders are, in fact, not lizards! They have similarities such as slender bodies, short legs and long tails, but <b>THEY ARE NOT THE SAME!</b> 
            This is why, again, just like with frogs and toads, I compiled a table to contrast them in order for an uneducated public (including myself, until recently) to engrave the difference in their heads.
        </p>

        <div class="flex w-full max-md:flex-col">
            <div class="grid w-full md:w-1/2 flex-grow card rounded-box place-items-center">
                <b>Salamanders</b>
                <ul>
                    <li>Amphibians.</li>
                    <li>Moist, porous skin that is permeable to water.</li>
                    <li>Salamanders dwell in aquatic habitats or in moist terrestrial habitats, like woodlands.</li>
                    <li>Some breathe through lungs, skin and mouth lining, while some don't have lungs and some even have gills.</li><!-- Some species breathe through lungs in addition to their skin and mouth lining, while other species lack lungs and rely on their skin and mouth lining for respiration. Fully aquatic species of salamander and aquatic larvae breathe through their skin and many species have external gills. -->
                    <li>Lay non-shelled eggs (with one exception). Some lay eggs in water and others on land (then larval stage is skipped).</li> <!-- the one exception is the European fire salamander, which gives birth to fully developed young -->
                    <li>All salamanders, are nocturnal.</li>
                    <li>Salamanders are strictly carnivorous, feeding on a typical diet of earthworms, insects and other small invertebrates.</li>
                </ul>
            </div>
            <div class="divider divider-vertical md:divider-horizontal">VS</div>
            <div class="grid w-full md:w-1/2 flex-grow card rounded-box place-items-center">
                <b>Lizards</b>
                <ul>
                   <li>Reptiles.</li>
                   <li>Dry skin with scales.</li>
                   <li>Lizards live in a wide variety of terrestrial habitats across the globe and are found on every continent except Antarctica.</li>
                   <li>Lizards breathe with lungs</li>
                   <li>Lizards typically lay shelled eggs on land, although some species are viviparous, meaning they give birth to fully developed young.</li>
                   <li>Most species of lizard are diurnal (active during the day) — although there are some nocturnal lizards, like geckos.</li>
                   <li>Some are carnivores and eat only other animals, some are herbivores and eat only plants, and some are omnivores and eat both.</li>
                </ul>
            </div>
        </div>


        <!-- https://www.reptilegardens.com/animals/amphibians-and-bugs/salamanders/ -->
        <h2>Habitat</h2>
        <p>
            What you should have picked up from our discussion so far is that amphibians looooove water.
            Salamanders, being Amphibians, duh, are not an exception.
            They live in moist or arid habitats in the northern hemisphere (mostly Americas), most salamanders are small, although there are two species that reach up to 5ft (1.5m) in length!
            Those lizard (but not lizard) like creatures live near water or shelter in the moist ground: brooks, creeks, ponds, and other moist locations such as under rocks.
            They lay (shell-less) eggs in water, so they <u>need clean water</u>! Hence, don't pollute water!!!
        </p>

        <div class="card lg:card-side bg-base-100 shadow-xl not-prose">
            <figure class=""><enhanced:img class="h-full object-cover overflow-hidden" src={AXOLOTL} alt="Wood Frog Image"/></figure>
            <div class="card-body">
                <h2 class="card-title">Axolotl Hall of Fame</h2>
                <p class="">
                    People love axolotls. 
                    Yes, this is a statement and a true fact based on personal experience, mostly.
                    They're famous as, unlike regular salamanders, they can reach adulthood without undergoing metamorphosis, hereby remaining aquatic and gilled. Oh, they also can regenerate, much like all salamanders.
                    But it is not for the love that they have the spotlight, it is because we owe them a <u>serious apology</u>.
                    And I literally cannot underscore the extent of this apology enough.
                    Their original habitat is in the lakes near this something we now call Mexico City.
                    When the settlers came to colonize, they drained the Axolotls' lakes, destroying much of their original habitat.
                    But, as much as I desire to finish this, the awfulness does not end on that note.
                    In 2020 axolotls had to bear near extinction because we, selfish humans, decided to pollute the homes of axolotls for the sake of our concrete homes.
                    So... Give your Respect to an Axolotl when you see one!
                </p>
            </div>
        </div>

        <!-- https://rochester.kidsoutandabout.com/content/what-do-salamanders-eat#:~:text=When%20they%20have%20grown%20into,including%20worms%2C%20spiders%20and%20slugs. -->
        <h2>Food</h2>

        <p>
            Much like frogs, you should say a big thanks to salamanders for eatings all these insects you hate, such as larvae of moscitos, and flies.
            They also save us from worms, crickets, centipedes and spiders.
            Additionally, some salamanders eat other small invertebrates.
        </p>

        <h2>Regeneration</h2>

        <p>
            Salamanders are well-know for their regenerational powers!
            I wish I could grow, let's say, a leg... 
            Imagine how much you could save on hospital bills if you had this kind of power?
            Forgot to bring a snack with you to a day-long hike? Lend yourself your helping hand!
        </p>

        <!-- <p>
            But where does this regenerative power comes from?
        </p> -->

        <!-- <h2>Origins</h2> -->

        

        <!-- <h2>Poison</h2>

        <p>
            Those salamanders are cool and lend us their helping hand, some of them are really po... follow the rule: if it is pretty, it doesn't need to hide.
        </p> -->

    </article>

    <!-- Caecilians -->
    <article class="prose my-10">
        <h1>Caecilians</h1>

        <enhanced:img class="h-auto max-w-full rounded-lg" src={CAECILIAN} alt=""/>

        <h2>What... Even is this thing?!</h2>

        <p>
            This was the first question I asked when i saw <i>THIS</i>. 
            It looks as if a worm and an electric eel had a baby! 
            How can this be related to those cutesy frogs we have all seen above?!
            Well, turns out it can.
            Imagine a blind and long salamander without legs and with rings along their bodies (those that worms usually have). 
            Imagined? Yeah... You get caecilians.
        </p>

        <h2>Origins</h2>

        <p>
            The natural question you may ask is where did evolution mess up so much in order to create this.
            Why would we even have <u>that</u>?
            Well, it certainly has advantages. 
            Just like worms they dig tunnels, which is why they neither need sight, nor hearing.
            The earliest fossil attributed to a stem-caecilian (an amphibian closer to caecilians than to frogs or salamanders but not a member of the extant caecilian lineage) comes from the Jurassic period.
            Back then those things still had limbs (though small) and well-developed eyes. 
            So, you could say, from human perspective caecilians have devolved.
        </p>

        <h2>Habitat</h2>

        <p>
            Turns out, they live in a lot of places: ranging from Central Africa, Southeast Asia, and southern Mexico to Argentina, these creatures prefer loose soil and leaf litter in tropical forests or near rivers and streams.
        </p>

        <h2>Food</h2>

        <p>
            Unlike worms, this thing has a sharp tooth. Sharp indeed.
            It has two rows on the upper jaw and one or two on the lower.
            The teeth allow them to grab worms, termites, beetle pupae, mollusks, small snakes, frogs, lizards, and even other caecilians! 
            All food is swallowed whole. 
            Furthermore, caecilians have toxic glands in their skin that sometimes protect them from being eaten by other wildlife.
        </p>

    </article>

    <!-- Save Amphibians! -->
    <!-- <article class="prose my-10">
        <h1>Save Amphibians!</h1>
    </article> -->
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
        <p>
            MIT License. Copyright © 2024 <a href="https://darklynx.org" class="link">Maxim Peniaz</a>. <a href="https://github.com/RIGIK93/amphiworld" class="link">Repository</a>.
        </p>
    </aside>
</footer>

<style>
    /* .appear {
        transition: all 0.8s;
        opacity: 0;
        transform: translateY(40px);
    }

    .appear.inview {
        opacity: 1;
        transform: none;
        transition-delay: 0.3s;
    } */
</style>