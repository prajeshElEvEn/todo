#!/bin/bash

gnome-terminal --tab --title="server" -- bash -c 'cd server && npm run server'

gnome-terminal --tab --title="client" -- bash -c 'cd client && npm run start'
