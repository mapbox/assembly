# Animations

Animations and animation modifiers.

```selectors
.animation-pulse
.animation-spin
.animation-fade-in
.animation-fade-out
.animation-fade-in-out
.animation-shake
```

Transition and reaction animations. By default, these run once for 1.5 seconds.

```example
<div class="bg-blue inline-block mr18 w60 h60 round animation-pulse animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-in animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-out animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-in-out animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-shake animation--infinite"></div>
```

```selectors
.animation-shimmer
```

Sweep a highlight across an element to show it is loading or updating. Works on any background color except white. Runs infinitely for 1.5 seconds per sweep; use the speed and delay modifiers below to change it.

```example
<div class="bg-gray-lighter round h36 mb12 animation-shimmer"></div>
<div class="bg-green round h36 mb12 animation-shimmer"></div>
<div class="bg-gray-dark round px12 py12">
  <div class="bg-lighten10 round h36 animation-shimmer"></div>
</div>
```

```selectors
.animation--speed-025
.animation--speed-05
.animation--speed-1
.animation--speed-2
.animation--speed-4
.animation--delay
```

Animation duration modifiers.
Change animation duration with an `animation--speed-{seconds}` modifier.
Add a 1 second delay with `animation--delay`.

```example
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--speed-025"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--speed-05"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--speed-1"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--speed-2"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--speed-4"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite animation--delay"></div>
```

```selectors
.animation--infinite
```

Repeat an animation infinitely with a `animation--infinite` modifier.

```example
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite"></div>
```
