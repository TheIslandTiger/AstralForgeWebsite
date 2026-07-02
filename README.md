# AstralForgeWebsite

This is the source code for [astralforge.co.uk](https://astralforge.co.uk).

## Installation

Ensure that you have docker and docker-compose installed, or docker desktop on mac and windows then run:

```bash 
docker compose up
```

The website should now be available at <http://127.0.0.1:4000>.

## Development

### Adding events

To create a new event, edit the `_data/events.yaml` and create a new entry in either the `past-events` or `future-events`sections with a `name`, `date`, `link`, `description` and `image`.
