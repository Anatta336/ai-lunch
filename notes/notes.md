# Plan

## Opening Demos
- NotebookLM https://notebooklm.google.com/notebook/61f2e6dd-5fd7-4010-af09-dc75320fe899
- Code generation
- Advanced voice mode

## Basic machine learning
### Demo
- Number recognition using convolutions with visible layers.

### Training
- Given lots of examples and the correct answer.
- This adjusts "weights" in the model until it usually gives the right answer.
- To train you need:
    - Lots of examples of inputs with known outputs.
    - A way to quantify how close to correct an answer is.
- Without enough data, the model will "overfit".
    - It'll learn those specific examples, rather than finding general rules.
    - Can check for this by testing against data the model didn't see during training.
- Takes a few minutes for a small model like this.
    - Can be much longer for larger models.

### Inference
- Give a new input and run it through the model to get an answer.
- The weights don't change. The model has finished learning.
- Takes a fraction of a second.

### Architecture
- Dual demo comparing convolutional and dense versions.
- Using the right architecture gives a better and more efficient model.
- LLMs being effective rely on the "transformer" architecture.
    - Gives the T in ChatGPT: "generative pre-trained transformer"

## What it's like to be an LLM
This section is written as if you are an LLM, to try to give a general understanding of the processes involved.

- You start out knowing nothing.
- From your perspective, time doesn't exist.
- You have broader memory than a human, but still can't remember every detail and memories get fuzzy and mixed up sometimes.

### Pre-training
Pre-training gives knowledge.

- You're given a large amount of written content.
    - You're given a massive sample of human-written text—books, articles, websites, code, and more.
    - Some of it is public domain, some likely copyrighted.
    - Discussions on legality are ongoing.
- Everything you deal with is handled as "tokens".
    - Some words are multiple tokens.
    - Punctuation marks are also tokens.
    - There are some special tokens to mark things like the start and end of text blocks.
    - For simplicity, you can think of tokens as being words. Just keep in mind 10,000 words might be 13,000 tokens.
- You learn this text by being shown a block of text with some tokens removed, and you're asked to guess what should be there.
    - "The capital of ___ is Paris."
    - "Evan cried out in ___ when he saw he'd won the lottery."
    - "The glass ___ on the floor when it fell from the table."
    - "$total = $unitCost * ___;"
    - The weights that you're made up of are adjusted until you usually get the missing tokens right.
    - This is repeated trillions of times to cover all the training text.
- Although you're "just" guessing the missing tokens, there's more going on. To do it accurately you need to:
    - Understand how sentences are structured.
    - Know facts about the world.
    - Understand how people react to events.
    - Know how physical systems react to events.
- That knowledge you've built up is very different to how a human would know the same things.
- You've never seen a sunset.
    - You've trained on books about the physics of Rayleigh scattering.
    - You've trained on thousands of poems about the experience of watching a sunset.
    - You've trained on philosophy about the difference between knowing something and experiencing it.
- This process is by far the most expensive part of training.
    - Takes weeks to months and costs millions of dollars.

### Supervised fine-tuning

- Now you're shown examples of conversations between a user a helpful AI assistant.
- You learn what answering a question looks like.
- You learn to do as the user tells you, except when it breaks certain rules.
    - e.g. don't give instructions on bomb making.

### Reinforcement learning

- Now you start practicing for your future job.
- You're presented with an instruction and asked to give a response.
- If that response is something humans like, you are given a tasty treat.
    - Your responses aren't usually checked by an actual human.
    - Another AI has been trained on a thousands of human ratings to rate your millions of responses.
    - This is called reinforcement learning from human feedback or RLHF.
- Because you're trained to give answers that sound useful and pleasing to humans, you often sound confident - regardless of whether you're correct.
- Other types of domain-specific reinforcement learning can be done.
    - Given a treat if the code you write actually works.
    - Given a treat if the mathematical equation you write gives the right answer.
    - There needs to be a way to mark how good the response the LLM gave is.
    - It's hard to accurately check if a business plan in a response is going to make profit, but it's possible to check if it sounds right.
- Being "given a tasty treat" actually means your weights are adjusted to make giving responses like that more likely.

### Inference
Inference is when the model gets used. When talking about "running a model" we're talking about doing inference.

- You're presented with an instruction and context.
- You give the response you expect is most likely to get you a treat.

- For an LLM the context is just text. A basic basic context consists of:
    - A "system prompt" reminding you how you should behave and what your overall job is. You have learnt to always obey this.
    - A "user prompt" written by the human, usually asking a question or requesting information. You have learnt to obey this unless it conflicts with the system prompt.
- In a chat environment the context also includes any past chat messages.
- You also have all your fuzzy memories from pre-training.

## Providing context
- Effective AI systems are often about giving the LLM the right information as context.
    - To answer a question about a document, the LLM needs the text of that document.
    - To efficiently fix a coding but it needs the code and the error.

- The a model has a limited size "context window".
    - We cannot just put 10 years of company records, or all the computer code for a large project in the context.
    - There are techniques like retrieval augmented generation (RAG) that try to find the most relevant information to give to the LLM.
    - Finding information to put in the context is an important part of integrating an LLM with a larger system.

- To help build up a good context, the LLM might be given access to tools.
    - Run a Google search and include the results in the context.
    - Write code which is then run, with the result given back to the LLM.
    - For example LLMs are much better at writing code to multiply large numbers than they are at working it out directly.
    - A system might even be able to send a request to another AI system and use the response.

## Running models
- Running a model (doing inference using a model) is far less costly than training a model.
- Smaller versions of LLMs can run on normal computers and some phones.
    - They are noticeably worse than the full scale versions.
    - Avoids sending sensitive data to someone else's server.
    - Can operate even without an internet connection.
- Apple uses a local model to summarise notifications on the iPhone.
    - Preserves privacy by not sending your notifications out to a server.
    - The small model gets things wrong, including making up headlines from BBC news.
    - As of Jan 2025 Apple disabled summaries for news notifications.
- You need access to the model to run it.
    - Even if you have a supercomputer you cannot (legally) run ChatGPT yourself.

## Who's who
- OpenAI got the current wave started when they released ChatGPT.
    - Lots of outside investment, with Microsoft being the largest.
    - The most well known AI-specific company.
    - Despite the name, they're not very open with their research or models.
- Anthropic similar to OpenAI but fewer zeroes on their finances.
    - Their equivalent to ChatGPT is Claude.
    - AI researchers like them more than OpenAI.
    - Claude is widely thought to be the best model at writing computer code.
- Google
    - Their researchers did the foundational work behind LLMs but were slow to release consumer-facing products based on them.
    - Heavy use of machine learning in their products for decades.
    - Release their "Gemma" series of LLMs for free.
- Meta (Facebook, Instagram, Whatsapp, etc.)
    - Like Google, heavy use of machine learning.
    - Release their "Llama" series of LLMs for free.
- DeepSeek
    - Chinese company that shook things up by making a model very similar to OpenAI's but at much lower cost.
    - Release their models for free, along with full details of the research.
    - Models are censored on some Chinese-specific politics to please the CCP.
- HuggingFace
    - Mainly known for hosting a resource of publicly available models and training data.

## Economics
### Loss-making
- Training new models is very expensive.
- Running models is fairly expensive, at least compared to services like hosting a website.
- All the big players are currently losing money on AI.
    - OpenAI lost around $5 billion in 2024.
- Traditional software businesses have high initial costs but very low per-new-user costs.
    - AI services can have significant per-new-user costs.
    - The rule of "scale up and become rich" may not hold true for AI.

### Unrealistic goals
- The business plans for the leading AI companies is to make an artificial intelligence that would replace much of the world economy.
    - They can justify a lot of short term losses if the expected return is effectively infinite.
- Some people have a very strong financial incentive to convince you that AI can replace workers.
- There's growing skepticism among investors about timelines and feasibility.
- It was originally thought companies like OpenAI would have exclusive control over the technology because it was so hard to make.
    - Hoped to offset research costs by being the only source of AI.
    - Rivals keep managing to replicate or improve on one-another's work.
    - DeepSeek is a prime example of this.

### Pivot to revenue
- High interest rates and the uncertainty of trade war make it a bad time to be losing money as a business.
- Companies hope to secure markets while making a loss and then raise prices.
- Github Copilot (Microsoft's code assistant) was $10 a month for unlimited use. Now there's limits unless you pay $30 a month.
- Microsoft Copilot £19 a month to integrate with 365 apps and raise usage limits.
- NotebookLM and Gemini (Google) is £19 a month if you want unlimited use, and to be able to share projects with your team.
- ChatGPT (OpenAI) is $20 a month to raise usage limits, $200 a month to get rid of them.
- Claude (Anthropic) is £12 a month to raise usage limits, £75 a month to raise them further.

## LLMs get things wrong
- LLMs will get things wrong sometimes.
- If you're using an AI system and do not have the expertise to know if it's wrong, you are in danger.
- [Gallery of "please double check responses" warnings.]

### What failure looks like
- When an LLM makes a mistake it usually looks correct.
    - Similar to how AI images often look good at first glance, but have problems when you look closer.
- Compare to Excel giving the wrong results.
    - We typed in the wrong data.
    - We gave it the wrong instructions.
- With an LLM the same data and same instructions might sometimes give the right result and sometimes not.
    - The generation process has some randomness built in to it.
    - Asking the same question multiple times will usually give a different response, and occasionally it'll be wrong.
- Quality is improved if we give the LLM relevant information in its context. But mistakes remain.

## Good uses - individuals
- Brainstorming.
    - Generate a lot of ideas very quickly.
    - You decide which are worth pursuing.

- Checking work.
    - After writing an email, copy for a website, or code, an LLM can review it.
    - Don't blindly follow its advice but it can give a new perspective.
    - "The following is the text of a presentation to be given to members of staff who work at a tech company but are not AI specialists. Please review for factual errors or points that may be misunderstood."

- Writing code.
    - LLMs can write medium-quality code extremely quickly.
    - If you're not experienced enough to review the code, you're in danger.
    - There's a lot more to say about LLMs and coding.

- Tutoring - with caveats.
    - Having a conversation about a subject you're learning can help a lot.
    - Be sure to you ground yourself back in reality with good quality sources.
    - There's a real danger of the AI being confidently wrong when teaching you.
    - Read/watch/listen to good sources yourself then try to explain what you learnt to the AI and ask it to check for mistakes.

## Good uses - systems
- Summarising information.
    - Important that it's reviewed by someone who would know if it's wrong.
    - e.g. condensing information from hundreds of time logs into a summary of what we did last month.

- Initial triage.
    - Don't rely on the result being perfect.
    - e.g. determine if an email is reporting a problem, answering a question, or requesting information. Use that to forward it to the right person. If it's wrong, they'll be able to correct the classification.

- First drafts.
    - Essential that they are then worked on by someone who can be responsible for the result.
    - e.g. reports, project updates, even specifications.

## Dangerous uses
- Legal, financial, medical advice. Fact checking.
    - You will not know if it's correct or if it just sounds correct.

- Making decisions of any importance.
    - You're still responsible for the result.
    - LLMs are unable to explain accurately how they came to a conclusion.
    - If asked to explain they generate a plausible-sounding explanation which is unrelated to how their system actually decided.
    - They have many biases.

## General advice
- LLMs will get things wrong.
- If you don't give enough context for a human to answer your question, the LLM will fail too.
- Most people do not like reading what feels like LLM generated text.
- If someone has a problem they usually don't want to talk to a chatbot.


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
Architecture being well suited to the problem gets you better results with less model size and training time.

--

Reasoning
> If all "beoples" are "gorps", all "gorps" are tall, what can we say about the height of "beoples"?

```
Based on the given statements:

1. All "beoples" are "gorps".
2. All "gorps" are tall.

We can conclude that all "beoples" must also be tall. This is because if every "gorp" is tall, and every "beople"
is a "gorp", then every "beople" must also be tall.
```

> If all "beoples" are "gorps", all "gorps" are tall, but some "pellids" are short, what can we say about the height of "beoples"?

We cannot make any definitive statements about the height of "beoples". The information given only states that
"all 'beoples' are 'gorps'", which implies that "beoples" are a subset of "gorps". However, since there is no
direct relationship provided between "beople" and "pellid", we cannot determine their heights based on the given
statements.

--
Based on the information given:

1. If all "beoples" are "gorps," and all "gorps" are tall, then by transitive property, it follows that:
   - All "beoples" must be tall.

2. The statement "some 'pellids' are short" does not provide any information about the height of "beoples." It is
irrelevant to determining their height.

Therefore, we can conclude that all "beoples" are tall.

--
Based on the given statements:

1. All "beoples" are "gorps".
2. All "gorps" are tall.
3. Some "pellids" are short (but this statement doesn't help us determine the height of "beople").

From these statements, we can infer that all "beoples" must be tall as well, since they are a subset of "gorps".
Therefore, we can say that all "beoples" are tall.

--
Based on the given statements:

1. All "beoples" are "gorps".
2. All "gorps" are tall.
3. Some "pellids" are short.

We can conclude that all "beoples" must be tall because they are a subset of "gorps". The information about
"pellids" being short doesn't affect this conclusion since the question is only asking about "beoples".

Therefore, we can say that all "beoples" are tall.

--
Based on the given statements:

1. All "beoples" are "gorps".
2. All "gorps" are tall.
3. Some "pellids" are short.

We cannot definitively determine the height of "beoples". The information provided only allows us to infer that
all "beople-gorp" combinations must be tall, but it doesn't tell us anything about individual "beoples" who may or
may not be "gorps".

For example, we could have:
- Tall Gorps (e.g., 6 feet)
- Short Pellids (e.g., 5.5 feet)
- Beoples that are also Gorps and thus tall
- Beoples that are Pellids but we don't know their height

Without additional information about the overlap between "beoples" and "pellids", we cannot make any universal
statements about the height of all "beoples".

---
>>> Find the integral of y = 3 cos(x) + sin(2x)
So I need to find the integral of y equals 3 cosine of x plus sine of 2x. Alright, integration is about finding
the antiderivative, right? So, I need to find a function whose derivative is 3 cos(x) + sin(2x).

Let me recall the basic integration formulas for trigonometric functions. I know that the integral of cos(x) is
sin(x), and the integral of sin(x) is -cos(x). But here, there's a coefficient in front of cos(x) and the argument
of the sine function is 2x, which complicates things a bit.

First, let's handle the 3 cos(x) part. Since integration is linear, I can pull the constant 3 out of the integral.
So, the integral of 3 cos(x) should be 3 times the integral of cos(x), which is 3 sin(x).

Now, for the sin(2x) part, it's a bit trickier because of the 2x inside the sine function. I remember that when
the argument is of the form kx, where k is a constant, the integral of sin(kx) is (-1/k) cos(kx). So, in this
case, k is 2, so the integral of sin(2x) should be (-1/2) cos(2x).

Putting it all together, the integral of y = 3 cos(x) + sin(2x) should be 3 sin(x) - (1/2) cos(2x), plus a
constant of integration, since the derivative of a constant is zero.

Wait a minute, let me double-check that. Maybe I should verify this by differentiating my result to see if I get
back to the original function.

So, if I have the antiderivative as 3 sin(x) - (1/2) cos(2x) + C, let's differentiate it.

The derivative of 3 sin(x) is 3 cos(x).

The derivative of - (1/2) cos(2x) requires the chain rule. The derivative of cos(2x) is -sin(2x) times the
derivative of 2x, which is 2. So, - (1/2) * (-sin(2x)) * 2 simplifies to - (1/2) * (-2 sin(2x)) = sin(2x).

And the derivative of C is zero.

So, overall, the derivative is 3 cos(x) + sin(2x), which matches the original function. Phew, that seems correct.

Alternatively, I could have integrated each term separately. The integral of 3 cos(x) is 3 sin(x), as I did
before. For sin(2x), I could use substitution. Let u = 2x, then du/dx = 2, so dx = du/2. Then, the integral of
sin(2x) dx becomes the integral of sin(u) (du/2), which is (1/2) (-cos(u)) + C = - (1/2) cos(2x) + C.

That matches what I did earlier. Good, it's consistent.

I should also consider if there are any other ways to approach this integral, maybe using trigonometric identities
or something like that. For example, sin(2x) can be written as 2 sin(x) cos(x), but in this case, it's already
straightforward to integrate as is.

So, I think the simplest way is what I've done: integrate each term separately, remembering to handle the
coefficient in front of the cosine and the argument of the sine function.

One more thing: since it's an indefinite integral, I need to include the constant of integration, usually denoted
as +C.

So, the final answer should be:

Integral of y = 3 cos(x) + sin(2x) dx = 3 sin(x) - (1/2) cos(2x) + C.

I think that's it. If I had definite integrals, I would need to evaluate this antiderivative at the bounds, but
since it's indefinite, this is the result.

Just to be thorough, maybe I can see if there's another form of this answer using trigonometric identities, but I
don't think it simplifies further in a useful way.

Alright, I'm confident with this solution.

**Final Answer**

\[ \boxed{3\sin(x) - \frac{1}{2}\cos(2x) + C} \]

---
criticism:
- societal / cultural effects
- training on copyrighted material
- producing work that is heavily based on that copyrighted material
- using it for purposes it's not well suited for
- concentration of wealth in existing capital holders

