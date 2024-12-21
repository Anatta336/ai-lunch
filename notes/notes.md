# New

## How ML works
### Difference from traditional programming
- Procedural programming is giving a set of conditions and instructions.
    - Add A to B. If the result is bigger than C, display a warning message.
    - How to add A to B? Follow this set of instructions.
    - How to check if the result is bigger than C? Follow this set of instructions.
    - How to show a warning message? Follow this set of instructions.
    - We decide exactly what the machine dones.
- Machine learning is training a model based on examples.
    - We don't decide how the machine solves the problem.
    -

### Training

### Inference

## LLMs

## Uses of LLMs
- Learning.
    - If getting it wrong is safe and readily identified.
    - Good: Programming. If code doesn't work you generally know quite fast.

## Other ML

## Anaconda
You have chosen to not have conda modify your shell scripts at all.
To activate conda's base environment in your current shell session:
```sh
eval "$(/home/sam/anaconda3/bin/conda shell.YOUR_SHELL_NAME hook)"
```
To install conda's shell functions for easier access, first activate, then:
```sh
conda init
```

## References
http://jalammar.github.io/visual-interactive-guide-basics-neural-networks/
https://www.asimovinstitute.org/neural-network-zoo/

Perceptron
Numeric OCR

Machine learning good for cases where there's not a single hard and fast answer.

Living networks don't just have a single output layer. Link in with many other parts of the brain and produce rich experience, not just a single sensation of seeing the number.

Networks do not have direct access to their training data. But everything they "know" is based on that data.

Train with numbers that don't include one of the forms of seven, and see how that impacts recognition.

Although don't have training data literally stored, large models might end up with some of it encoded.

The big idea of LLMs is auto complete that is so good at auto complete that it has learnt to do something like thinking.

Use number example extending it to doing mathematics?

LLMs are just doing token prediction, but they are so large they're able to take into account sentence structure, meaning, and something like reasoning when they pick the words.

The mistake of skeptics has been to correctly identify they're just doing token prediction and then assume that means their abilities are very limited.

End with summary notes, one point from each section of talk.



- Networks need training on a lot of example data.
- Further outside their training data, the less accurate.
- LLMs work by encoding text and guessing what comes next.
- LLMs are nondeterministic.
- Pre training, HLRF, finetuning, prompting.
- If they think, it's thought that looks like human but it's fundamentally different. They get things wrong in different ways than humans.
- They can automate some jobs. Excel vs office work.
- Around 2014 simple scaling was found to be surprisingly effective for LLMs.
- Optimists are going for that line to keep going up.
- Apple paper on reasoning failures.
- On their own, LLMs are unlikely to exceed human intelligence.
- I would be surprised if we end up with an advanced intelligence that doesn't include something very like an LLM as a part of a larger mind.
- The best LLMs are very expensive to train and a little expensive to run. Different cost profile to most technology.
- Smaller LLMs can be trained to do some things almost as well and for much cheaper.


# Original

Basics of an ANN.
Image processing, pattern recognition.
The shift to generative.
Context for text.
One token at a time, chain of thought as a patch on the limitation.
AI is in a bubble, but there's still real useful technology there. Also a lot of hype and silliness.
Danger of impressive demos that fail in practical use cases.

Example of image generation. Able to make one nice image of a woman in a city scene. Now make 10 more of the same person, holding our product. Both of those asks are hard problems.

If you cannot confirm the output of the LLM is correct, and it's important that it is correct, then the problem is not a good fit for an LLM.

LLMs do not know when they're making things up, and unless you already know the information is incorrect, you cannot tell.

--
Goals:
• How LLMs work in practice. Understanding needed for including them in a product, not building one from scratch.
• Example usages. Sofia giving feedback. Code generation. Summarising, using Google Notebook as example.
• Weaknesses.
• Economics of building and using models.
• Future.

Why people are talking about AI recently is the advent of generative AI.

Censorship: autocorrect on phones as an old example "had a ducking awful day".

Advanced voice mode as a Sofia answering service. Discuss having to limit what the general purpose system does, and provide it with domain specific information like who to send callers interested in SEO to.

--
Problem of trust. Systems work best with more context, so personal products using AI end up needing access to everything about you.

--
LLMs are optimised to produce output that sounds convincing. Sometimes that is done by it being true, but sometimes it's wrong in a very convincing way.

--
Economic impact.

Some jobs will get more efficient. How much so is very much debated.

Some job levels will be hard to justify. A lot of work done by entry level people can be done at a similar level of imperfection by an LLM. So you are paying much more to have a human do it, in the hole they'll get better than the machine, and stay at you company.

The internet is being polluted by low value generated content. This will be hard to clean up and reduces the benefits we gain from this shared resource.

Expectations for AI are almost certainly overblown. The bubble will pop and a lot of invested money will have been lost. The volume of capital expenditure is more than enough for another "dot com" level of impact.

"Reach for yield"

Check figures.

Some people are investing on the basis of AI becoming a machine god. That is unlikely to happen.

--
Brittle reasoning: https://arstechnica.com/ai/2024/10/llms-cant-perform-genuine-logical-reasoning-apple-researchers-suggest/

LLMs do not actually understand things. They are very good at giving that illusion, so much so they often produce correct output.

Philosophical zombie equivalent but for reasoning.

--
Social factors
There's conflict over the value of AI, and meaningful pushback over the feeling of it being forced in to everything.

--
Proponents of AI are often blinded by what they speculate could come, so don't see clearly what exists right now.

--
Call to action: try ChatGPT. See what it knows about something you know a lot about. Try using it for something practical. Do not blindly trust the output.

--
Be worried about what people will do with the technology, not about fairy tales of super intelligence.

--
Next word prediction is what gets used on your phone's keyboard. This was starting life as that.

Next word prediction and filling gaps in an image are conceptually similar.

--
Chinese government is already paying people to post on social media (2017) so will surely be using AI to automate it.

Illicit information campaigns. Tenet media in US. Paid from Russia to generate conflicting information.

--
Machine learning has been around decades. What gets people excited about the current wave is the systems are much more universal than previously.

AlphaGo can play Go better than humans, but it can't hold a conversation. Calculators divide numbers better than humans, but that's all.

--
The way answers are presented by systems like ChatGPT makes people trust them more than they probably should.

Potential here for social media like impact on how people get their information and beliefs about the world.

--
Intuition about what LLMs are good at.

Check that Babbage quote for machine being given the wrong input, would it still give the correct output. Unlike traditional computation, there is a degree of error correction in LLMs. Which also means they don't do exactly as you ask.

Hallucinations are an inherent feature of the system. It's a feature that makes them poorly suited for some applications.

--
Scaling surprise over past 10 years. Had thought we'd need more in the way of clever algorithms. Turns out language is surprisingly doable with just a lot of data.

--
Most people don't like chat bots.

--

