mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

pub struct Terrain {
    width: u32,
    height: u32,
    cell_size: u8,
    corners: Vec<u8>,
}

impl Terrain {
    pub fn new(width: u32, height: u32) -> Terrain {
        let cell_size: u8 = 16;
        let total_corners = (width + 1) as u32 * (height + 1) as u32;
        let corners = vec![255 as u8; total_corners as usize];

        Terrain {
            width,
            height,
            cell_size,
            corners,
        }
    }

    pub fn width(&self) -> u32 {
        self.width
    }

    pub fn height(&self) -> u32 {
        self.height
    }

    pub fn cell_size(&self) -> u8 {
        self.cell_size
    }

    pub fn get_cell(&self, x: u32, y: u32) -> u32 {
        let top_left = x + y * self.width;
        let top_right = top_left + 1;
        let bottom_left = top_left + self.width;
        let bottom_right = bottom_left + 1;
        let mut cell: u32 = self.corners[bottom_right as usize] as u32;
        cell |= (self.corners[bottom_left as usize] as u32) << 8;
        cell |= (self.corners[top_right as usize] as u32) << 16;
        cell |= (self.corners[top_left as usize] as u32) << 24;
        cell
    }
}

#[wasm_bindgen]
pub struct World {
    terrain: Terrain,
}

impl World {}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        let width = 60;
        let height = 30;
        let terrain = Terrain::new(width, height);
        World { terrain }
    }

    pub fn width(&self) -> u32 {
        self.terrain.width()
    }

    pub fn height(&self) -> u32 {
        self.terrain.height()
    }

    pub fn cell_size(&self) -> u8 {
        self.terrain.cell_size()
    }

    pub fn cell(&self, x: u32, y: u32) -> u32 {
        self.terrain.get_cell(x, y)
    }

    pub fn tick(&mut self) {}
}
