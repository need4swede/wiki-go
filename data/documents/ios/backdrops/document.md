---
order: 50
---

# Backdrops on iPhone & iPad

Backdrop artwork is made for a widescreen television. A phone held upright is
close to the opposite shape, so a backdrop stretched to fill it is nearly four
times wider than the screen and roughly three quarters of the picture is left
outside — always the same way, cropped straight down the middle. Anything the
artist put off-centre is what gets cut.

Neptune handles that in two ways: a **framing** setting that decides how every
backdrop is fitted, and a **hold-to-reposition** gesture for placing an
individual image by hand — including moving it down the page.



## Framing

**Settings > User Preferences > Appearance > Backdrops > Framing**

| Mode | What you get |
|------|--------------|
| **Smart** | Neptune looks at the picture on your device, finds the subject, and aims the crop at it — then pulls back so more of the frame stays visible. Default. |
| **Fill Screen** | Edge to edge, cropped from the centre. The original Neptune look. |

Smart mode reads the image entirely on your device. Nothing is uploaded, no
account or API key is involved, and it works the same on a library you are
browsing offline. Faces win when there are any — a crop that slices a face is
the thing this exists to prevent — and Neptune falls back to the picture's
overall centre of attention when there are none.

Framing follows your profile through Backup & Restore, and a server
administrator can set a default for it from the Neptune plugin dashboard.

Apple TV is unaffected: a television is already the shape backdrops are made
for, so it keeps filling the screen.



## Repositioning a Backdrop by Hand

Automatic framing is a good guess, not a verdict. On any movie or show page, in
all three detail layouts — Detailed, Immersive, and Minimal:

1. **Touch and hold the backdrop.** It lifts, the page stops scrolling, and the
   fade at the artwork's edges thins out so you can see where the picture
   actually ends.
2. **Drag** to move the picture — sideways to choose which part of a cropped
   image you keep, and up or down to sit it where you want on the page.
   **Pinch** to change how much of it is shown; pinching outward stops once the
   whole backdrop fits, so there is a natural end to it.
3. **Tap** anywhere to lock it in.

Neptune stores that placement for **that specific image** and uses it every
later time the image appears. It is saved as a position rather than a fixed
rectangle, so one placement carries across all three detail layouts — Detailed,
Immersive, and Minimal — as well as across iPhone and iPad, and both
orientations.

Layouts show different amounts of the artwork, so a shorter hero may not be able
to shift a picture quite as far as a full-screen one. Nothing is lost when that
happens: it shows the closest it can, and going back to a roomier layout brings
your original framing back exactly.

While an image is lifted, a **Reset framing** button appears if you have placed
it before — that returns just this one image to automatic framing.

Whichever mode you pick, you can still place any individual image by hand — and
pinching outward always stops once the whole backdrop is visible, so nothing is
ever hidden from you.

By default a backdrop sits at the very top of the page. Drag it downward and a
dark gradient fills in above it, so the clock and battery have something to sit
on and the picture reads as part of the page rather than floating on it. The
gradient appears and disappears with the movement — put the image back at the
top and it goes away.

A drag only moves along an axis that has somewhere to go. Once the whole picture
is visible and it exactly fills the screen, there is nothing left to slide.

Backdrops you place by hand are part of **Backup & Restore**, so they come back
after a reinstall or on a new device. Only the position is saved — a few numbers
per image, never a copy of the artwork — so even a heavily customised library
adds only kilobytes to your backup.

Framings Neptune worked out on its own are *not* backed up. They do not need to
be: your device recalculates them from the picture in a fraction of a second.

**Reset Repositioned Backdrops** in the Backdrops settings section clears every
hand-placed framing at once.

If a server administrator replaces a title's artwork, Neptune re-reads the new
picture and works out a fresh automatic framing for it. A placement **you** made
by hand is kept, because it was your decision rather than a guess — use **Reset
framing** if it no longer suits the replacement.
