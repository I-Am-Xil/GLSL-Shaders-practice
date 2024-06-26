#ifdef GL_ES
precision mediump float;
#endif
    
uniform vec2 u_resolution;
uniform float u_time;

float circleShape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(sin(u_time / 1.0), cos(u_time) / 1.0);
    coord += translate * 0.5;

    color += vec3(circleShape(coord, 0.3));

    gl_FragColor = vec4(color, 1.0);
}