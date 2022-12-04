<template>
    <div>
        <div class="section bg-dark white-text">
            <div class="row">
                <div class="col m10 s10 offset-s1 offset-m1">
                    <div class="row">
                        <div class="col">
                            <h4>
                                <slot name="title"></slot>
                            </h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <slot name="content"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>