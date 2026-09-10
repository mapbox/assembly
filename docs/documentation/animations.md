# Animations

Animations and animation modifiers.

## Transition and reaction animations. By default, these run once for 1.5 seconds

Transition and reaction animations. By default, these run once for 1.5 seconds.

```example
<div class="bg-blue inline-block mr18 w60 h60 round animation-pulse animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-in animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-out animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-fade-in-out animation--infinite"></div>
<div class="bg-blue inline-block mr18 w60 h60 round animation-shake animation--infinite"></div>
```

## Animation duration modifiers

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

## Repeat an animation infinitely with a `animation--infinite` modifier

Repeat an animation infinitely with a `animation--infinite` modifier.

```example
<div class="bg-blue inline-block mr18 w60 h60 round animation-spin animation--infinite"></div>
```
