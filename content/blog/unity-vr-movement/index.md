---
title: Unity VR movement
date: "2019-05-07"
tags: [c#, VR, Unity, games]
thumbnail: ./vr.jpg
description: Elevating in this saturated environment, soggy from the waves, learning with every failure and from the ashes WE RISE
---

# Unity VR movement

### Transform.Translate()

Lets say we are walking around our world.

#### Declaration

Moves the transform by x along the x axis, y along the y axis, and z along the z axis.

```c
public void Translate(float x, float y, float z, Space relativeTo = Space.Self);
```

If `relativeTo` is left out or set to Space.Self the movement is applied relative to the transform's local axes. (the x, y and z axes shown when selecting the object inside the Scene View.) If relativeTo is Space.World the movement is applied relative to the world coordinate system.

for example if we are moving in VR land by holding our joysticks and moving them up and down, simulating running movement and we only change the value on the z axis with no forth arg aka relativeTo. we would be moving forward aka along the z axis, not relative to the space (this works, but we might want more control)

```c
public Transform leftAnchor;
public Transform rightAnchor;
bool LeftControllerIsOnTop;
public Camera mainCam;

void Start()
{
  mainCam = Camera.main;
}

void Update()
{
  if(LeftControllerIsOnTop && leftAnchor.position.y > rightAnchor.position.y)
  {
    print("MovePlayer");
    transform.Translate(0,0,-.02f);
    LeftControllerIsOnTop = true;
  }
    else if(LeftControllerIsOnTop && leftAnchor.position.y < rightAnchor.position.y)
  {
    print("MovePlayer");
    transform.Translate(0,0,-.02f);
    ControllerIsOnTop = false;
  }
}

```

![Don't stop](./vr.jpg)
