# ÆVYNDAL COMPONENT LIBRARY

## Purpose

This document defines the components that make up aevyndal.com.

Components should be small, composable, reusable, and independent.

Components exist to support the experience.

Avoid creating components that exist solely to satisfy code organization.

---

# Philosophy

Components are not widgets.

Components are pieces of the world.

Every component should answer:

"What experience does this create?"

Before:

"What information does this display?"

---

# Site Shell

## SiteShell

Root wrapper.

Contains:

* Ambient backdrop
* Navigation
* Footer
* Global transitions

Persistent across pages.

The shell should feel like the world itself.

---

# Navigation

## FloatingHeroNav

Appears above the fold.

Transparent.

Integrated into the hero.

Contains:

* Logo
* Search
* Navigation links
* Age switcher

Should feel part of the scene.

Never dominate.

---

## GhostHeader

Appears below the fold.

Subtle.

Glass effect.

Reduced height.

Persistent search access.

Smooth appearance.

Never abrupt.

---

# Background Components

## AmbientBackdrop

Largest visual layer.

Contains:

* Atmosphere
* Images
* Video
* Particles
* Slow movement

Represents the world.

Not content.

---

## AtmosphereLayer

Contains:

* Fog
* Snow
* Rain
* Stars
* Pollen
* Dust

Motion should be almost imperceptible.

---

# Hero Components

## HeroSection

Answers:

"What is this?"

Contains:

* Hero video
* Search
* Main message
* Primary actions

Large negative space.

Supports text overlay.

---

## HeroContent

Contains:

Headline

Subheadline

Buttons

Nothing more.

Avoid clutter.

---

# Card Components

## GlassCard

Foundation component.

Provides:

* Glass effect
* Rounded corners
* Subtle border
* Texture

Cards are windows.

Not boxes.

---

## CardMedia

Responsible for image/video area.

Image should fade into card body.

No hard separation.

Supports:

* Image
* Ambient video
* Poster fallback

---

## AmbientVideo

Motion texture.

Never content.

Rules:

* muted
* loop
* autoplay
* playsinline

Fallback:

poster image.

---

## CardContent

Contains:

* Category
* Title
* Description
* Metadata

Supports gradual transitions.

---

# Homepage Sections

## StoryPromises

Answers:

"What stories exist here?"

Cards:

* Folk Horror
* Political Intrigue
* Exploration
* Heroic Adventure
* Cyberpunk Noir
* Brightpunk Hope

---

## StartingLocations

Answers:

"Put me somewhere."

Large cinematic cards.

Examples:

* Hallowmere
* Cultrek
* Kill City
* Greenmarch

These are emotional entry points.

---

## IdentityCards

Answers:

"Who could I be?"

Examples:

* Hunter
* Scholar
* Witch
* Merchant
* Smuggler

Identity before lore.

---

## AgeExplorer

Answers:

"What genre interests me?"

Eight age cards.

Atmosphere changes.

Layout does not.

Supports age transitions.

---

## FeaturedArticles

Answers:

"Tell me more."

Highly reusable.

Mood inherited from page.

---

## LivingWorldSection

Answers:

"Is this active?"

Contains:

* recent articles
* actual plays
* updates

---

## CommunitySection

Answers:

"Can I belong?"

Contains:

* Discord
* Videos
* Polls
* Community

---

# Search Components

## SearchOverlay

Global search.

Always accessible.

Groups results:

* Locations
* Creatures
* Articles
* Faiths
* Campaigns

Search is king.

---

## SearchResultCard

Minimal.

Fast.

Relationship-focused.

---

# Article Components

## ArticleHero

Mood image/video.

Large title.

Minimal metadata.

---

## RelatedCards

Show relationships.

Not "More Articles".

Should answer:

"What else belongs here?"

---

## InfoBlock

Reusable content block.

Can contain:

* Quotes
* Notes
* Warnings
* GM Advice

---

# Typography Components

## SectionHeader

Category label

Title

Description

Consistent spacing.

---

## MetadataRow

Small supporting information.

Never dominant.

---

# Transition Components

## AgeTransitionLayer

Controls age changes.

Background changes continuously.

Content changes discretely.

No loading screens.

---

## CrossfadeText

Text exits gracefully.

New text enters separately.

Never pop.

---

# Future Components

## Collections

Save content.

Bookmarks.

Campaign folders.

---

## Timeline Explorer

Visual chronology.

Secondary feature.

---

## Relationship Graph

Dynamic graph of related content.

Should feel like discovery.

Not navigation.

---

# Rule

Every component should answer:

"What feeling does this create?"

before:

"What function does this serve?"
