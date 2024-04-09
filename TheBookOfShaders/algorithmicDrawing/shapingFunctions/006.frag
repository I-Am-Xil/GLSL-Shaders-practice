#version 460
#ifdef GL
precision mediump float;
#endif

out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float Plot(vec2 coord, float plot){
    return smoothstep(plot - 0.02, plot, coord.y) - smoothstep(plot, plot + 0.02, coord.y);
}


void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;

    float y = smoothstep(0.2, 0.5, coord.x) - smoothstep(0.5, 0.8, coord.x);

    vec3 color = vec3(y);

    float plot = Plot(coord, y);
    color = (1.0 - plot) * color + plot * vec3(0.0, 1.0, 0.0);

    fragColor = vec4(color, 1.0);
}