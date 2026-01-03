---
order: 30
---

# A/V Synchronization

Trident uses sophisticated sync to keep audio and video aligned.

---

## Audio-Master Clock

Audio playback drives timing. Video frames display based on audio clock:

- Audio callbacks provide ~94Hz timing updates
- Video frames evaluated against audio time
- Early frames held, late frames dropped

---

## Drift Compensation

Over long sessions, clocks can drift. Trident compensates:

1. **Baseline**: First 2 seconds establish offset
2. **Measurement**: 60-second windows track drift rate
3. **Correction**: Audio rate adjusted to match video

This maintains sync during multi-hour playback.

---

## Post-Seek Sync

After seeking, Trident:

1. Flushes all buffers
2. Seeks to nearest keyframe
3. Pre-fills video buffer
4. Waits for fresh audio frames
5. Applies grace period for frame drops

This prevents sync issues after seeking.

---

## Troubleshooting

**Audio out of sync:**

- Wait 2-3 seconds for calibration
- Try seeking to reset sync
- Unusual audio codecs may need adjustment
