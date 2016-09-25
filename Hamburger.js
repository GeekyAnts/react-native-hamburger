import React, { Component } from 'react';
import {
    Animated,
    TouchableWithoutFeedback,
    Text,
    View
} from 'react-native';

export default class Hamburger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    spinCross() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            Animated.spring(this.containerAnim, {
                toValue: 1
            }).start();
            Animated.spring(this.topBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: -10
            }).start();
            Animated.spring(this.middleBarOpacity, {
                toValue: 0,
                duration: 30
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.containerAnim, {
                toValue: 0
            }).start();
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4
            }).start();
            Animated.timing(this.middleBarOpacity, {
                toValue: 1,
                duration: 600
            }).start();
        }
    }

    cross() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            Animated.spring(this.topBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: .9
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: -10
            }).start();
            Animated.timing(this.middleBarOpacity, {
                toValue: 0,
                duration: 30
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4
            }).start();
            Animated.spring(this.middleBarOpacity, {
                toValue: 1,
                duration: 1200
            }).start();
        }
    }


    spinArrow() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            Animated.spring(this.containerAnim, {
                toValue: 1
            }).start();
            Animated.spring(this.topBar, {
                toValue: 1
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 1
            }).start();
            Animated.spring(this.width, {
                toValue: 14
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: -13
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 2
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: -2
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.containerAnim, {
                toValue: 0
            }).start();
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
            Animated.spring(this.width, {
                toValue: 25
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: 0
            }).start();
        }
    }

    arrow() {
        if (!this.state.active) {
            this.setState({
                active: true
            });
            Animated.spring(this.topBar, {
                toValue: 1
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 1
            }).start();
            Animated.spring(this.width, {
                toValue: 14
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: -13
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 2
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: -2
            }).start();
        } else {
            this.setState({
                active: false
            });
            Animated.spring(this.topBar, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBar, {
                toValue: 0
            }).start();
            Animated.spring(this.width, {
                toValue: 25
            }).start();
            Animated.spring(this.marginLeft, {
                toValue: 0
            }).start();
            Animated.spring(this.bottomBarMargin, {
                toValue: 4
            }).start();
            Animated.spring(this.topBarMargin, {
                toValue: 0
            }).start();
        }
    }


    _animate() {
        const { props: { type } } = this;
        type=="spinArrow" ? this.spinArrow() :
        type=="arrow" ? this.arrow() :
        type=="spinCross" ? this.spinCross() :
        this.cross();


    }
    render() {

        const { props: { color } } = this;

        this.containerAnim = this.containerAnim || new Animated.Value(0);
        this.topBar = this.topBar || new Animated.Value(0);
        this.bottomBar = this.bottomBar || new Animated.Value(0);
        this.middleBarOpacity = this.middleBarOpacity || new Animated.Value(1);
        this.bottomBarMargin = this.bottomBarMargin || new Animated.Value(4);
        this.topBarMargin = this.topBarMargin || new Animated.Value(0);
        this.marginLeft = this.marginLeft || new Animated.Value(0);
        this.width = this.width || new Animated.Value(25);

        return (
            <TouchableWithoutFeedback
                onPress={()=> {this._animate(), this.props.onPress ? this.props.onPress() : undefined}}>
                <Animated.View style={{
                    width: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 35,
                    transform: [
                        {rotate: this.containerAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '360deg'
                            ],
                        })}
                    ]
                    }}>
                    <Animated.View style={{
                        height: 3,
                        marginLeft: this.marginLeft,
                        width: this.width,
                        marginBottom: this.topBarMargin,
                        backgroundColor: color ? color : 'black',
                        transform: [
                            {rotate: this.topBar.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '-50deg'
                                ],
                            })}
                        ]
                    }} />
                    <Animated.View style={{
                        height: 3,
                        width: 25,
                        opacity:this.middleBarOpacity,
                        backgroundColor: color ? color : 'black',
                        marginTop: 4}} />
                    <Animated.View style={{
                        height: 3,
                        marginLeft: this.marginLeft,
                        width: this.width,
                        backgroundColor: color ? color : 'black',
                        marginTop: this.bottomBarMargin,
                        transform: [
                            {rotate: this.bottomBar.interpolate({
                                inputRange: [0, 1],
                                outputRange: [
                                    '0deg', '50deg'
                                ],
                            })}
                        ]
                    }} />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}
